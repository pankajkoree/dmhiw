import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Signup = () => {
  return (
    <div>
      {/* username starts here */}
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      {/* username ends here */}

      {/* email starts here */}
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      {/* email ends here */}

      {/* email starts here */}
      <div>
        <label htmlFor="password">Email</label>
        <input type="text" id="email" />
      </div>
      {/* email ends here */}
    </div>
  );
};

export default Signup;
