terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "hausi1bucket" {
  bucket = var.bucketname
  tags = {
    Name        = var.bucketname
    Environment = "Dev"
  }
}
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["*24.04*"]
  }
  filter {
    name   = "architecture"
    values = ["x86_64"]
  }

  owners = ["099720109477"] # Canonical
}
resource "aws_instance" "hausi1bucket" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  tags = {
    Name        = var.instancename
    Environment = "Dev"
  }
}

variable "bucketname" {
  type = string
}

variable "instancename" {
  type = string
}
output "ami_id" {
  value = data.aws_ami.ubuntu.id
}
output "instance_public_ip" {
  value = aws_instance.hausi1bucket.public_ip
}
output "bucket_arn" {
  value = aws_s3_bucket.hausi1bucket.arn
}
