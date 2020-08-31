import React from "react";

const EmptyData = () => (
  <div
    className="mx-auto"
    style={{ marginTop: "60px", textAlign: "left", width: "45%" }}
  >
    <h3>Uh-oh.....</h3>
    <h3>Something wrong here.<span>🤔</span> </h3>
    <h2>Try these steps:</h2>
    <ul>
      <h3>
        <li>On project root directory</li>
      </h3>
      <h3>
        Create file{" "}
        <a href="#" target="_blank">
          db.json
        </a>{" "}
        inside folder <b>database</b>
      </h3>
      <h3>
        Copy the JSON content from{" "}
        <a href="#" target="_blank">
          here
        </a>
      </h3>
      <h3>
        <li>Run on terminal/commmand prompt </li>
        <ul>
          <li>
            <code>npm run db-server</code> or <code>yarn db-server</code>
          </li>
        </ul>
      </h3>
      <h3>
        <li>Refresh the browser</li>
      </h3>
    </ul>
  </div>
);

export default EmptyData;