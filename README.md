# The Soft Compiler

## Instruction Manual:

1.	Download the “SoftCompiler” folder in your local drive.
2.	Enable CORs for your system. 
a.	Follow the instruction given in the below website for windows operating system: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
3.	Make sure that CORs are enabled for the website. Once it’s done open the main.html in the web browser. 
4.	You can add the number of input devices by clicking on the “+” button and in a similar way reducing them by clicking on the “–” button.
5.	Once the required number of inputs are presented with possible combinations in the form of the truth table, select a required output from the given result. Click on 1 or 0 and the color will change. 
6.	To generate the schematic from the desired logic, please select 1 on the output. If not selected, the default value of output is zero. 
7.	Once the desired output from the given input is selected then click generate. 
8.	It will create a sequence of logic along with the input and the output. This needs to be understood properly and accordingly used.

# Video

https://user-images.githubusercontent.com/68814774/156986141-ce81bba4-c95e-4291-9a80-e0b4e75b79d7.mp4

## Tips

1. We recommend using the soft compiler for max. 10 inputs. 
2. Input J is intentionally removed to avoid confusion between I and J.

## Reading the schematic
1. The output schematic is organized in terms of block diagrams. 
2. The output from each logic device is connected horizontally to the closest next logic devices. 
3. If there are multiple inputs, the vertical placement of the logic device should be considered. 
4. If there are two inputs then the output from the top logic device will go into the top input of the next horizontally closest logic device. 
5. Below is an annotated example. 

	![image](https://user-images.githubusercontent.com/68814774/156939979-d4bdefd8-f009-4d04-ab2b-e255c64246d3.png)

4. When assembling the fluidic circuit here are a few organizational suggestions for assembly:  
a.	Look at how many times input is repeated in the schematic. Create a splitter with that many outlets before starting the assembly.  
b.	Pre-configure all of the soft logic devices to the correct gate and test before assembly.  
c.	Count the number of logic gates and 6 times it gives number of tubes for soft bistable valve. 
d.	Different lengths of tubes will be needed depending on the schematic and logic devices. 

# Background for customising the soft compiler tool

1. The soft compiler tool offers customisation to include the novel logic devices to the family. 
2. Create similar icons which can be configured as AND, OR, NOT,NAND or NOR gates and add them to 'Figures' folder. 
3. When properly linked, the tool can generate the block diagram to with new devices.
