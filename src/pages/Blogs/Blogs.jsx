import useTitle from "../../hook/useTittle";

const Blogs = () => {
  //setTittle
  useTitle('Blogs')
  
  return (
    <div className="min-h-screen space-y-5 p-10  md:p-0 mt-10 md:mt-20">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            
            An access token is a temporary token that provides access to
            resources or services, while a refresh token is a long-lived token
            used to obtain a new access token when the current one expires. The
            use of these tokens helps maintain security and enhances the user
            experience by allowing continuous access to protected resources
            without frequent reauthentication.
          </p>
          <p className="font-bold py-2">
            How do they work and where should we store them on the client-side
          </p>
          <p>
            1. User Authentication: When a user logs in, the authentication
            server verifies their credentials and generates an access token and
            a refresh token.
            <br />
            2. Access Token Usage: The client application includes the access
            token in each request it makes to access protected resources or
            APIs. The server checks the validity and permissions associated with
            the access token to allow or deny access to the requested resources.
            <br /> <br />
            Access Token Storage: The access token is typically stored on the
            client-side, such as in memory or a browser's local storage or
            session storage. It should be securely handled to prevent
            unauthorized access. Storing it in an HTTP-only cookie is also a
            recommended approach as it provides an additional layer of security.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            <h1 className="font-bold my-2">
              SQL Databases (Relational Databases):
            </h1>
            <ul className="space-y-3">
              <li>
                1. Structure: SQL databases store data in a structured manner
                using tables with predefined schemas. Each table has columns and
                rows, and relationships between tables can be established using
                keys.
              </li>
              <li>
                2. Data Integrity: SQL databases enforce strict data integrity
                rules, such as ensuring data consistency, uniqueness, and
                referential integrity.
              </li>
              <li>
                Examples: MySQL, PostgreSQL, Oracle Database, Microsoft SQL
                Server.
              </li>
            </ul>
            <h1 className="font-bold my-2">
              NoSQL Databases (Non-Relational Databases):
            </h1>
            <ul className="space-y-3">
              <li>
                
                1. Structure: NoSQL databases are designed to handle
                unstructured or semi-structured data. They use various data
                models like key-value pairs, documents, columnar, or graphs to
                store and organize data.
              </li>
              <li>
                {" "}
                2. Flexibility: NoSQL databases offer more flexible schemas,
                allowing for dynamic changes to the data structure without
                strict adherence to predefined schemas.
              </li>
              <li>Examples: MongoDB, Cassandra, Redis, CouchDB.</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            <h1 className="font-bold my-3 ">Express js </h1>
            Express.js is a web application framework for building server-side
            applications and APIs using JavaScript. It is designed to simplify
            the process of creating web applications by providing a set of tools
            and features.
            <h1 className="font-bold my-3"> Nest JS </h1>
            NestJS is a powerful, scalable, and modular TypeScript-based web
            application framework for building efficient and maintainable
            server-side applications.Its modular architecture, TypeScript
            support, and integration with popular tools make it a powerful
            choice for creating robust server applications and APIs.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work ?
        </div>
        <div className="collapse-content">
          <p>
            <h1 className="font-bold my-3"> What is MongoDB aggregate </h1>
            In MongoDB, the aggregate function is a powerful feature that allows
            you to perform complex data analysis and transformation operations
            on your data. It provides a way to process multiple documents and
            apply various operations to produce aggregated results.

           
            <h1 className="font-bold my-3">how does it work ? </h1>
            <ul className="space-y-2">
                <li>Input: The aggregate function takes a collection of documents as input. These documents are stored in a MongoDB collection.</li>
                <li>Stages: The aggregate function applies a series of stages to the input documents. Each stage performs a specific operation on the documents and passes the results to the next stage.</li>
            </ul>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
