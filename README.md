# Setting Up and Running a Node.js Application on EC2

This guide will walk you through the process of setting up and running a Node.js application on an EC2 instance. Follow these steps:

## Step 1: Install Node.js and NPM using NVM

1. Install Node Version Manager (NVM):
   ```sh
   sudo su -
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
   
## Step 2: Activate NVM:
   sh
. ~/.nvm/nvm.sh

## Step 3: Install the latest version of Node.js:
sh
nvm install node

## Step 3: Test Node.js and NPM installations:
sh
node -v
npm -v

## Step 4: Install Git and Clone Repository from GitHub
Update package index:
sh
sudo apt-get update -y

## Step 5: Install Git:
sh
sudo apt-get install git -y

## Step 6: Verify Git installation:
sh
git --version

## Step 7: Clone the code repository from GitHub:
sh
git clone https://github.com/yeshwanthlm/nodejs-on-ec2.git

## Step 8: Navigate to the cloned directory:
sh
cd backend

## Step 9: Install required packages:
sh
npm install

## Step 10: Start the Application
To start the application, run the following command in the terminal:
sh
npm start
