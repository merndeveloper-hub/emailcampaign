# Setting Up and Running a Node.js Application on EC2

This guide will walk you through the process of setting up and running a Node.js application on an EC2 instance. Follow these steps:

## Step 1: Install Node.js and NPM using NVM

1. Install Node Version Manager (NVM):
   ```sh
   sudo su -
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
Activate NVM:
sh
Copy code
. ~/.nvm/nvm.sh
Install the latest version of Node.js:
sh
Copy code
nvm install node
Test Node.js and NPM installations:
sh
Copy code
node -v
npm -v
Step 2: Install Git and Clone Repository from GitHub
Update package index:
sh
Copy code
sudo apt-get update -y
Install Git:
sh
Copy code
sudo apt-get install git -y
Verify Git installation:
sh
Copy code
git --version
Clone the code repository from GitHub:
sh
Copy code
git clone https://github.com/yeshwanthlm/nodejs-on-ec2.git
Navigate to the cloned directory:
sh
Copy code
cd nodejs-on-ec2
Install required packages:
sh
Copy code
npm install
Step 3: Start the Application
To start the application, run the following command in the terminal:

sh
Copy code
npm start```
