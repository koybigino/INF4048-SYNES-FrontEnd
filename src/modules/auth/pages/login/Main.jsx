import { Input, Button } from "@material-tailwind/react";

export default function Main() {

  return (<>
        <div className="ring h-screen">
          <div className="w-full h-full flex items-center mx-auto justify-around container">
              <div className="h-auto py-24 rounded-xl shadow-xl bg-white">
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
                      <Button className="bg-main lowercase text-black mx-auto w-10/12 py-5" size="lg" color="amber">color amber</Button>
                    </div>
                  </div>
                </form>
              </div>
          </div>  
        </div>  
  </>);
}
