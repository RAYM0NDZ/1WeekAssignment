import React from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  return (
    <div className="col-6 mt-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <>
            {props.infos.length > 0 ? (
              <>
                {props.infos.map((list) => {
                  return (
                    <tr key={uuidv4()}>
                      <td>{list.name}</td>
                      <td>{list.email}</td>
                      <td>{list.address}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td className="text-center text-danger mt-4">No Info Yet!</td>
                </tr>
              </>
            )}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default List;
