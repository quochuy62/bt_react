<td>
                <button
                  onClick={() => {
                    dispatch(editCreator(student));
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteCreator(student.id));
                  }}
                  className="mx-2"
                >
                  Delete
                </button>
</td>