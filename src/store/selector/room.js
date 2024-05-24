import { createSelector } from 'reselect'

const roomSelector = (state) => state.room
export const getRoomData = createSelector([roomSelector], (room) => ({
  rooms: room.rooms,
  detail: room.detail,
}))
