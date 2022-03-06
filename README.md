Instruction Manual
1.	Download the “SoftCompiler” folder in your local drive.
2.	Enable CORs for your system. 
a.	Follow the instruction given in the below website for windows operating system: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
3.	Make sure that CORs is enabled for the website. Once it’s done open the main.html in web browser. 
4.	You can add the number of input device by clicking on “+” button and in similar way reduce them by clicking on “–” button.
5.	Once required number of inputs are presented with possible combinations in the form of truth table, select a required output from given result. Click on 1 or 0 and the color will change. 
6.	Once the desired output from given input are selected then click generate. 
7.	It will create an a sequence of logic along with the input and the output. This needs to be understood properly and accordingly used.

Best Practices:

1. The soft compiler can take in up to ___ inputs. We suggest that the used does not use more that 10 inputs.  
2. When entering the desired logic into the truth table the user only needs to select 1 on the lines of the turth table. All lines with no user input are assumed to be zero. 
3. The output schematic is organized in a hiearchal manner. The output from each logic device should be connected to the horizontally closest next logic devices. If there are multiple inputs the vertical placement of the logic device should be considered. If there are two inputs then the output from the top logic device will go into the top input of the next horizontally closets logic device. Below is an annotated example. 
![image](https://user-images.githubusercontent.com/68814774/156939952-f1441539-1c67-4d9c-8f7e-8aeec5f0c334.png)

4. When assembling the fludic circuit here are a few organizational suggestions for assembly:  
	a. Look at how mnay times an input is repeated in the scheamitc. Create a splitter with that many outlets before starting assembly. 
	b. Pre configure all of soft logic devices to the correct gate and test before assembly. 
	c. Count the number of logic gates and double it to estimate how many tubes you will need to connect the soft logic devices together. Diffrent lengths of tubes will be needed depending on the schematic. Diffrent number of tubes will be needed depending on the desired logic device. 
