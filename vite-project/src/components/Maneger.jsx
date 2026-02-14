import React, { useRef, useState, useEffect } from "react";
import eye from "../assets/icons/eye.png";
import eyeClose from "../assets/icons/eyeclose.png";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






const Maneger = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passArray, setPassArray] = useState([]);
  const [editId, setEditId] = useState(null);

  

  const passRef = useRef(null);
  const eyeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
  fetch("http://localhost:5000/passwords")
    .then((res) => res.json())
    .then((data) => setPassArray(data));
}, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("All fields are required!", { autoClose: 2000 });
      return;
    }

    await fetch("http://localhost:5000/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    

    setForm({ site: "", username: "", password: "" });

    const res = await fetch("http://localhost:5000/passwords");
    const data = await res.json();
    setPassArray(data);

    toast.success("Password added successfully!", {
      autoClose: 2000,
      transition: Bounce,
    });
  };

  const deletePass = async (id) => {
    if (!window.confirm("Are you sure, do you want delete password ?")) return;
   
    await fetch(`http://localhost:5000/password/${id}`, {
  method: "DELETE",
});

   
    setPassArray(passArray.filter((item) => item._id !== id));
    toast.success("Password deleted!", { autoClose: 2000 });
  };

  const editPass = (id) => {
  const item = passArray.find((item) => item._id === id);

  setForm({
    site: item.site,
    username: item.username,
    password: item.password,
  });

  setEditId(id); 
}


  const togglePassword = () => {
    if (show) {
      passRef.current.type = "password";
      eyeRef.current.src = eye;
      eyeRef.current.classList.add("invert");
    } else {
      passRef.current.type = "text";
      eyeRef.current.src = eyeClose;
      eyeRef.current.classList.remove("invert");
    }
    setShow(!show);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied successfully!", { autoClose: 2000, transition: Bounce });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />

      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 m-auto h-[260px] w-[260px] sm:h-[310px] sm:w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto max-w-4xl px-3 sm:px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center pt-5">
          Pass<span className="text-emerald-700">Maneger</span>
        </h1>

        <p className="text-emerald-700 text-base sm:text-lg text-center">
          Your personal password manager!
        </p>

        <div className="p-4 flex flex-col gap-6 sm:gap-8 items-center text-black">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            name="site"
            className="rounded-full border border-emerald-700 w-full p-4 sm:p-5 py-2 sm:py-1"
          />

          <div className="flex w-full gap-4 sm:gap-8 flex-col md:flex-row">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              name="username"
              className="rounded-full border border-emerald-700 w-full p-4 sm:p-5 py-2 sm:py-1"
            />

            <div className="relative w-full">
              <input
                ref={passRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                name="password"
                type={show ? "text" : "password"}
                className="rounded-full border border-emerald-700 w-full p-4 sm:p-5 py-2 sm:py-1 pr-12"
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
              >
                <img
                  ref={eyeRef}
                  src={eye}
                  alt="eye"
                  className="w-5 h-5 invert"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400 rounded-full py-2 px-4 w-full sm:w-fit font-bold hover:bg-green-300 border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover"
              stroke="bold"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="text-green-700 font-bold py-2 mr-5 text-lg">
            Your Passwords
          </h2>

          {passArray.length === 0 && <div>No password to show here</div>}

          {passArray.length !== 0 && (
            <div className="overflow-x-auto p-2 sm:p-4">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base">
                <thead className="bg-green-600">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left">#</th>
                    <th className="px-4 sm:px-6 py-3 text-left">Site</th>
                    <th className="px-4 sm:px-6 py-3 text-left">Username</th>
                    <th className="px-4 sm:px-6 py-3 text-left">Password</th>
                    <th className="px-4 sm:px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-green-200">
                  {passArray.map((item, index) => (
                    <tr key={item._id} className="hover:bg-gray-50 transition">
                      <td className="px-4 sm:px-6 py-4">{index + 1}</td>
                      <td className="px-4 sm:px-6 py-4 flex items-center gap-2">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:underline break-all"
                        >
                          {item.site}
                        </a>
                        <button onClick={() => copyText(item.site)}>
                          <FaCopy />
                        </button>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        {item.username}
                        <button
                          onClick={() => copyText(item.username)}
                          className="ml-2"
                        >
                          <FaCopy />
                        </button>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 flex items-center gap-2">
                          {"*".repeat(item.password.length)}
                          <button
                            onClick={() => copyText(item.password)}
                          >
                            <FaCopy />
                          </button>
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 flex items-center gap-3">
                        <button onClick={() => editPass(item._id)}>
                          <lord-icon
                     src="https://cdn.lordicon.com/fikcyfpp.json"
                     trigger="hover"
                        >
                      </lord-icon>
                        </button>
                        <button onClick={() => deletePass(item._id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/jzinekkv.json"
                            trigger="hover"
                          ></lord-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Maneger;
