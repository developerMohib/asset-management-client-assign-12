const Event = () => {
  return (
    <div>
     <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<span className="text-xs uppercase text-gray-600">Join, it is free</span>
				<h3 className="text-3xl font-bold">We are not reinventing the wheel</h3>
				<p className="my-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<span className="text-xs uppercase text-gray-600">Join, it is free</span>
				<h3 className="text-3xl font-bold">We are not reinventing the wheel</h3>
				<p className="my-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<span className="text-xs uppercase text-gray-600">Join, it is free</span>
				<h3 className="text-3xl font-bold">We are not reinventing the wheel</h3>
				<p className="my-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Event;
