import {useState} from "react";

function CariHadits() {
    const [data, setData] = useState([]);

    async function cari(key) {
        console.warn(key);
        
        let result = await fetch("http://localhost:8000/api/cari/" + key);
        result = await result.json();
        setData(result);
    }
    return (
        <div className="container">
            <div className="text-center mt-5 mb-4">
                <h2>Daftar Hadits</h2>
            </div>

            <input 
            type="text"
            className="form-control" 
            id="cari" autoComplete="off" 
            placeholder="Silahkan Cari Hadits..."
            onChange={(e)=>cari(e.target.value)}
            />
            <br />

            <ul class="list-group list-group-flush">
                {data.map((item) => (
                    <li class="list-group-item">
                        <br />
                        Hadits Nomor {item.id}, 
                        <br />
                        <br />
                        {item.arab},
                        <br />
                        <br />
                        {item.terjemah}
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CariHadits;