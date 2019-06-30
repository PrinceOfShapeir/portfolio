This program will employ a neural net approach to chess automation.

rkbqkbkr

8x8 board space

Octopus Approach. An Octopus has a distributed nervous system, considered ideal for asynchronous, fast paced environments. Since chess is synchronous that will not be a benefit, however there remains a potential for time savings with parallelized calculations.

Each type will have its own dedicated subnet. The moving piece will be chosen according to ranked activation potential, or RAT. 




Base case: At start, each pawn has two possible outputs. To simplify, feed all 16 possible moves into the Pawn Calculator, and choose the pawn with the highest RAT. The RAT of the highest pawn will be compared with the highest knight, and so forth.

Counter calculation will employ same method to analyze opponent's reaction. This will update the decision matrices until an equilibrium is reached, when the best counter move no longer changes the initial move.


Decision function will approximate RAT_MAX * A where A is a random factor to be determined.






