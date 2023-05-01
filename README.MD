
<div align="center">

<img src ="./img/hackerank.png">
</div>

# Challenge: Compare the triplets

<p align="center">
    <a href="https://www.linkedin.com/in/deivid-martins1994/">
  	<img alt ="linkedn" src ="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/deivid94">
  <img alt="github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.hackerrank.com/md031194">
  <img alt="hackerrank" src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"> 

</p>

Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

    If a[i] > b[i], then Alice is awarded 1 point.
    If a[i] < b[i], then Bob is awarded 1 point.
    If a[i] = b[i], then neither person receives a point.

Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]

    For elements *0*, Bob is awarded a point because a[0] .
    For the equal elements a[1] and b[1], no points are earned.
    Finally, for elements 2, a[2] > b[2] so Alice receives a point.

The return array is [1, 1] with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

    int a[3]: Alice's challenge rating
    int b[3]: Bob's challenge rating

Return

    int[2]: Alice's score is in the first position, and Bob's score is in the second.

Input Format

The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

Constraints

    1 ≤ a[i] ≤ 100
    1 ≤ b[i] ≤ 100

Sample Input 0

5 6 7
3 6 10

Sample Output 0

1 1

Explanation 0

In this example:

Now, let's compare each individual score:

, so Alice receives
point.
, so nobody receives a point.
, so Bob receives

    point.

Alice's comparison score is
, and Bob's comparison score is . Thus, we return the array

.

```Sample Input 1

[17, 28, 30]
[99, 16, 8]

Sample Output 1

[2 , 1]

```
Explanation 1
Comparing the
elements, so Bob receives a point.
Comparing the and elements, and so Alice receives two points.
The return array is . 