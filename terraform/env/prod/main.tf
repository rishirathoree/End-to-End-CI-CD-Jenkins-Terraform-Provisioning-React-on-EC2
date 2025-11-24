module "setup_module" {
    source = "../../modules"
    env = "prod"
    vpc_cidr = "10.0.0.0/16"
    subnet_public_cidr = "10.0.0.0/24"
    key_pair_name = "mykey-jenkins"
}