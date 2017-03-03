# compare-the-triplets 
# hackerrank
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet A = (a0,a1,a2) , and the rating for Bob's challenge to be the triplet B = (b0,b1,b2).

Your task is to find their comparison scores by comparing a0 with b0,  a1 with b1, and s2 with b2.

If a0 > b0, then Alice is awarded 1 point.
If a0 < b0, then Bob is awarded 1 point.
If a0 = b0, then neither person receives a point.
Comparison score is the total score a person earned.

Given  and , can you compare the two challenges and print their respective comparison points?

Input Format

The first line contains  space-separated integers, , , and , describing the respective values in triplet . 
The second line contains  space-separated integers, , , and , describing the respective values in triplet .

Constraints

Output Format

Print two space-separated integers denoting the respective comparison scores earned by Alice and Bob.

Sample Input

5 6 7

3 6 10
Sample Output

1 1 
Explanation

In this example:

A = (a0,a1,a2) = (5,6,7)

B = (b0,b1,b2) = (3,6,10)

Now, let's compare each individual score:

a0 > b0, so Alice receives  point.

a1 = b1, so nobody receives a point.

a2 < b2, so Bob receives  point.
Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we print 1 1 (Alice's comparison score followed by Bob's comparison score) on a single line.
