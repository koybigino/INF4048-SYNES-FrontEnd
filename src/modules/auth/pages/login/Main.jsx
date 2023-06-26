import { Input, Button } from "@material-tailwind/react";

export default function Main() {

  return (<>
        <div className="ring h-screen">
          <div className="w-full h-full flex items-center mx-auto justify-around container">
              <div className="h-auto py-16 rounded-xl shadow-xl bg-white">
              {/* <h1 className="text-3xl pb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-second">Synes</h1> */}
              <h1 className="text-3xl text-center pb-6 font-bold text-second"><span className="bg-main rounded-lg px-1">Sy</span> nes</h1>
                <form action="">
                  <div className="flex mx-6 flex-col justify-center items-center">
                    <h1 className="text-2xl mb-12 font-bold">Login</h1>
                    <p className="text-xl mb-6 w-9/12 text-center">Hey, enter your details to get sign in to your account</p>
                    <div className="w-full my-1">
                      <Input label="Username" color="amber" className="py-6" />
                    </div>
                    <div className="w-full my-12">
                      <Input label="Password" color="amber" className="py-6" />
                    </div>
                    <div className="w-full flex justify-center mt-12">
                      <Button color='pink' className="bg-main lowercase text-black mx-auto w-10/12 py-5" size="lg" color="amber">color amber</Button>
                    </div>
                  </div>
                </form>
              </div>
          </div>  
        </div>  
  </>);
}
