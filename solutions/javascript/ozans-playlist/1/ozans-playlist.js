// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const uniqeArr = [...new Set(playlist ?? [])];
  return uniqeArr
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
 for (let name of playlist) {
   if (name === track) {
     return true
   } else {
     return false
   }
     
 }
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const set = new Set(playlist)
  console.log(track, playlist)
  set.add(track)
  return [...set]
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const set = new Set(playlist)
  set.delete(track)

  return [...set]
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let uniq = []
  console.log(playlist)
  for (let name of playlist) {
    uniq.push(name.split("-")[1]?.trim())
  }
  return [...new Set(uniq ?? [])]
}
