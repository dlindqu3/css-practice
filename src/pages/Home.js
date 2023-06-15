import React, { useState } from "react";
import "./Home.css"; 

function Home() {

  const [lorem, setLorem] = useState(false);

  let handleShow = () => {
    setLorem(!lorem); 
  }

  return (
    <div>
      <div>Home page here</div>
      <p>Add lorem ipsum x15:</p>
      <button onClick={handleShow}>Show</button>
      { lorem && <div className="lorem">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dicta sed dignissimos suscipit reprehenderit, praesentium iste saepe,
          earum quos, pariatur iusto velit nam blanditiis porro vel! Eum
          perspiciatis maiores enim!
        </div>
      </div> }
    </div>
  );
}

export default Home;
