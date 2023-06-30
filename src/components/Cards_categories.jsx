
export default function Cards_categories({category, number_jobs, children, bg_color}) {
  return (
    <div className={`w-1/3 h-36 ${bg_color} rounded-2xl flex flex-col gap-1 px-3 py-4`}>

                        <div className="flex items-center justify-center rounded-full bg-black w-8 h-8">
                            {children}
                        </div>

                        <h3 className="text-[10px] text-black">{category}</h3>

                        <p className="text-sm text-black font-bold">{number_jobs} Jobs</p>

                        <button className="bg-black text-white hover:bg-yellow-400 hover:font-bold hover:text-black text-[10px] p-2 rounded-full">View Jobs</button>

                    </div>
  )
}
