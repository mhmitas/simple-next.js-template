import Btn from "@/components/Btn";
import Container from "@/components/common/Container";

export default function Home() {
  return (
    <div>
      <header>
        <div className='w-full'>
          <div className="h-[550px] flex flex-col justify-center items-center w-full shadow-lg dark:shadow-blue-500/15">
            <h1 className="text-5xl font-bold mb-4 text-center">
              Welcome to Our Website
            </h1>
            <p className="text-xl mb-8 text-center">
              We provide the best solutions for your business.
            </p>
            <div className='flex gap-2'>
              <Btn><button sx={{ borderRadius: 100 }} variant='contained'>
                Learn More
              </button></Btn>
              {/* <button className='btn btn-primary text-white'>DaisyUI</button> */}
              <Btn><button sx={{ borderRadius: 100 }} variant='outlined'>
                Contact Us
              </button></Btn>
            </div>
          </div>
        </div>
      </header>
      <Container>
      </Container>
    </div>
  );
}
