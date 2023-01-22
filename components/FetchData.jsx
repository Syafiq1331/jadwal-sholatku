import React from 'react'

const FetchData = () => {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch('https://api.myquran.com/v1/sholat/jadwal/1609/2021/06/23')
      .then(response => response.json())
      .then(json => setData(json.data.jadwal))
  }, [])

  const jadwalSholat = ['subuh', 'dzuhur', 'ashar', 'maghrib', 'isya']

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-bold bg-blue-100 text-gray-900 px-6 py-4 border-r">
                      Nama Sholat
                    </th>
                    <th scope="col" className="text-sm font-bold bg-blue-100 text-gray-900 px-6 py-4 border-r">
                      Jadwal Sholat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && jadwalSholat.map((sholat, index) => {
                      return (
                        <tr key={index} className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">
                            {sholat}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r">
                            {data[sholat]}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FetchData