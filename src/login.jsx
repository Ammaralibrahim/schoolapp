import "./App.css";
import { Link } from "react-router-dom";
import Google from "./svg/google";
import SignupIcon from "./svg/SignupIcon";


function Login() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto sm:mx-4 bg-dcdcdc sm:rounded-lg flex justify-center p-8 md:p-0">
        <div className="lg:w-3/4 xl:w-1/2 p-4 sm:p-6 md:p-6">
          <div>
            <img
              src="https://img.icons8.com/?size=256&id=hpvYvQwrrjRL&format=png"
              className="w-12 mx-auto"
              alt="logo"
            />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-400">
              Plainiq'e giriş yap
            </h1>
            <div className="w-full flex-1 mt-4 sm:mt-24">
              <div className="mx-auto max-w-md">
                <input
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-6 sm:mt-12"
                  type="email"
                  placeholder="E-posta"
                />
                <input
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-6 sm:mt-3"
                  type="password"
                  placeholder="Şifre"
                />
                <button className="mt-5 sm:mt-3 tracking-wide font-semibold bg-1e90ff text-gray-100 w-full py-3 sm:py-3 rounded-lg bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <SignupIcon />
                  <span className="ml-2">Giriş yap</span>
                </button>
                <div className="float-right text-xs flex py-2">
                  Hesabınmı yokmu?<Link to="/signup" className="ml-1 text-sky-600 underline">Kaydol</Link>
                </div>
              </div>
              <div className="my-8 border-b text-center">
                <div className="leading-none px-2 inline-block text-xs sm:text-sm text-gray-600 tracking-wide font-medium bg-dcdcdc transform translate-y-1/2">
                  Ya da Google ile giriş yapın
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-dcdcdc p-2 rounded-full bg-sky-100">
                  <Google />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-dcdcdc text-center hidden lg:flex">
          <div
            className="m-6  xl:m-8 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/environmental_study_skau.svg")',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
