variable "env" {
    description = "The environment for the VPC (e.g., dev, prod)"
    type        = string
}

variable "vpc_cidr" {
    description = "The CIDR block for the VPC"
    type        = string
}

variable "subnet_public_cidr" {
    description = "The CIDR block for the public subnet"
    type        = string
}

variable "key_pair_name" {
    description = "The name of the key pair for EC2 instances"
    type        = string
}