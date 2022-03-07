# Tube-Balloon Logic for the Exploration of Fluidic Control Elements

## Instruction Manual:

1.	Download the “SoftCompiler” folder in your local drive.
2.	Enable CORs for your system. 
a.	Follow the instruction given in the below website for windows operating system: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
3.	Make sure that CORs is enabled for the website. Once it’s done open the main.html in web browser. 
4.	You can add the number of input device by clicking on “+” button and in similar way reduce them by clicking on “–” button.
5.	Once required number of inputs are presented with possible combinations in the form of truth table, select a required output from given result. Click on 1 or 0 and the color will change. 
6.	To generate the schematic from the desired logic, please select 1 on the output. If not selected, the default value of output is zero. 
7.	Once the desired output from given input are selected then click generate. 
8.	It will create an a sequence of logic along with the input and the output. This needs to be understood properly and accordingly used.

# Video

https://user-images.githubusercontent.com/68814774/156986141-ce81bba4-c95e-4291-9a80-e0b4e75b79d7.mp4

## Tips

1. We recommend to use the soft compiler for max. 10 inputs. 
2. Input J is intentionally removed to avoid confusion between I and J.

## Reading the schematic
1. The output schematic is organized in a hiearchal manner. 
2. The output from each logic device should be connected to the horizontally closest next logic devices. 
3. If there are multiple inputs the vertical placement of the logic device should be considered. 
4. If there are two inputs then the output from the top logic device will go into the top input of the next horizontally closets logic device. Below is an annotated example. 

![image](https://user-images.githubusercontent.com/68814774/156939979-d4bdefd8-f009-4d04-ab2b-e255c64246d3.png)

4. When assembling the fludic circuit here are a few organizational suggestions for assembly:  
 	a. Look at how mnay times an input is repeated in the scheamitc. Create a splitter with that many outlets before starting assembly.  
 	b. Pre configure all of soft logic devices to the correct gate and test before assembly.  
	c. Count the number of logic gates and double it to estimate how many tubes you will need to connect the soft logic devices together. Diffrent lengths of tubes will be 	needed depending on the schematic. Diffrent number of tubes will be needed depending on the logic device.  
