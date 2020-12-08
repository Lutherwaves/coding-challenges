/**
 * An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, , or a downhill, step. Hikes always start and end at sea level, and each step up or down represents a
 * unit change in altitude. We define the following terms:
 *  A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
 *  A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
 * Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
 * Example:
 * The hiker first enters a valley units deep. Then they climb out and up onto a mountain
 * units high. Finally, the hiker returns to sea level and ends the hike.
 * Function Description
 * countingValleys has the following parameter(s):
 *     int steps: the number of steps on the hike
 *     string path: a string describing the path
 * Returns
 *     int: the number of valleys traversed
 * Input Format
 * The first line contains an integer
 * , the number of steps in the hike.
 * The second line contains a single string , of
 * characters that describe the path.
 * Sample Input
 * 8
 * UDDDUDUU
 * Sample Output
 * 1
 * Explanation
 * If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:
_/\      _
   \    /
    \/\/

/**
 * The hiker enters and leaves one valley.
 * int steps: the number of steps on the hike
 * string path: a string describing the path with 'U's and 'D's
 * - a mountain is two consecutive Us
 * - a valley is two consecutive Ds
 * Samples
 * INPUT steps = 8, path='UDDDUDUU'
 * OUTPUT 1
 * INPUT steps = 8, path = 'DDUUUUDD'
 * OUTPUT 1
 * INPUT steps = 10, path = 'UDUDUDDDDU'
 * OUTPUT 2
 */

// First solution
function countValleys(steps, path) {
  // Given constraints of starting and ending at sea level (0)
  // there cannot be any valleys at < 4 steps
  let valleys = 0;
  if (steps < 4) {
    return valleys;
  }

  // Keep track of level starting at sea level
  let level = 0;
  for (let i = 0; i < steps; i++) {
    if (level === 0 && path[i] == 'D') {
      valleys++;
    }
    level += path[i] === 'D' ? -1 : 1;
  }

  return valleys;
}

countValleys(12, 'UDUDUDDDDUUU');
