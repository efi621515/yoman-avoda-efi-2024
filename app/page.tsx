export default function Home() {
  return (
    <div className="min-h-screen p-4" dir="rtl">
      <h1 className="text-2xl font-bold mb-6">יומן עבודה אפי</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-1">תאריך</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-1">לקוח</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="שם הלקוח"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          שמור
        </button>
      </form>
    </div>
  )
npm run dev
  

