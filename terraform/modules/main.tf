resource "aws_vpc" "vpc_main" {
    cidr_block = var.vpc_cidr
    tags = {
        Name = "${var.env}-vpc"
    }
}

resource "aws_subnet" "subnet_public" {
    vpc_id            = aws_vpc.vpc_main.id
    cidr_block = var.subnet_public_cidr
    tags = {
        Name = "${var.env}-subnet"
    }
  
}

resource "aws_internet_gateway" "ig-gw" {
    vpc_id = aws_vpc.vpc_main.id
    tags = {
        Name = "${var.env}-igw"
    }
}

resource "aws_route_table" "route_public_internet" {
    vpc_id = aws_vpc.vpc_main.id
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.ig-gw.id
    }
    tags = {
        Name = "${var.env}-route-public-internet"
    }
}

resource "aws_route_table_association" "route_public_internet" {
    subnet_id = aws_subnet.subnet_public.id
    route_table_id = aws_route_table.route_public_internet.id
}

resource "aws_security_group" "security_group" {
    description = "Security group for ${var.env} environment which allows SSH, TCP & React Traffic"
    vpc_id      = aws_vpc.vpc_main.id
    tags = {
        Name = "${var.env}-security-group"
    }
    ingress {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port   = 80
        to_port     = 80 
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port   = 443
        to_port     = 443
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 5173
        to_port = 5173
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 8080
        to_port = 8080
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_key_pair" "deployer_key" {
    key_name   = var.key_pair_name
    public_key  = file("../../../vm/${var.key_pair_name}.pub")
}

resource "aws_instance" "jenkins-server" {
    ami           = "ami-02b8269d5e85954ef"
    instance_type = "t3.small"
    subnet_id     = aws_subnet.subnet_public.id
    associate_public_ip_address = true
    vpc_security_group_ids = [aws_security_group.security_group.id]
    key_name      = aws_key_pair.deployer_key.key_name
    tags = {
        Name = "${var.env}-jenkins-server"
    }
  
}

resource "aws_instance" "jenkins-agent" {
    ami           = "ami-02b8269d5e85954ef"
    instance_type = "t3.small"
    subnet_id     = aws_subnet.subnet_public.id
    associate_public_ip_address = true
    vpc_security_group_ids = [aws_security_group.security_group.id]
    key_name      = aws_key_pair.deployer_key.key_name
    tags = {
        Name = "${var.env}-jenkins-agent"
    }
}