export const deleteData = (setNewData, idSelected, deleteService) => {
  setNewData((data) => {
    return data.filter((value) => {
      return value._id !== idSelected
    })
  })
  deleteService(idSelected)
}
