# The Soft Compiler
The soft compiler is a web-based tool that accepts a user-defined robot behavior as a truth table to generate a mathematically optimized circuit diagram that guides the assembly of a soft fluidic circuit.

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
1. The schematic is organized in terms of inputs, outputs and logic devices. 
2. The inputs are located on the left side, and the output from each logic device is connected horizontally to the next closest logic devices. 
3. All soft bistable valves representations of the logic gates includes red arrows, where some are marked with “T” and “B”, denoting top and bottom chamber respectively.
4. We highly recomment to read the information about configuring soft bistable valve as a logic gate from (https://github.com/roboticmaterialsgroup/soft-bistable-valve.) Below is an annotated example. 

	![github sample schematic v2small](https://user-images.githubusercontent.com/68814774/157142876-7cd6fb4a-3b73-46e0-a586-7b3366816c5b.png)

4. When assembling the fluidic circuit here are a few organizational suggestions for assembly:  
a.	Look at how many times input is repeated in the schematic. Create a splitter with that many outlets before starting the assembly.  
b.	Pre-configure all of the soft logic devices to the correct gate and test before assembly.  
c.	Count the number of logic gates and 6 times it gives number of tubes for soft bistable valve. 
d.	Different lengths of tubes will be needed depending on the schematic and logic devices. 

## Background for customising the soft compiler tool

1. The soft compiler tool offers customisation to include the novel logic devices to the family. 
2. Create similar icons which can be configured as AND, OR, NOT,NAND or NOR gates and add them to 'Figures' folder. 
3. When properly linked, the tool can generate the block diagram to with new devices.
