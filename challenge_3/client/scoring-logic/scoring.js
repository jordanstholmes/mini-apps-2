/*
we need to know
frames = [frame]
  frame = {total: num, first: num, second: num}
Total

strike
  +10 + next + next
if strike on 10th frame, get two more balls each potentially worth 10


strikes look like x a miss looks like a - spare is /

one extra ball for a spare in the tenth round

spare
*/

/*
Player state:
  total
  doublePointShots: 0-2
  shots: [[1,0], [10, null], [5, 5]]

pins:
7, 8, 9, 10
 4, 5, 6
  2, 3
   1

Frame:
  { first: 5, second: undefined, total: undefined}
  { first: 10, second: null, total: undefined}
FrameShots:
  { first: 1, second: 3 } "1, 3"
  { first: 0, second: 5 } "-, 5"
  { first: 5, second: 5 } "5, /"
  { first: 0, second: 10 } "5, /"
  { first: 10, second: null } "5, /"
  { first: 5, second: undefined } "5, '' "
FrameTotal:
  { total: undefined }

  Given a 2d array of shots, returns an array of objects with totals
*/

