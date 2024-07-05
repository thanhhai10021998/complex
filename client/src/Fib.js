import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState(null);
    const [values, setValues] = useState(null);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    });

    const fetchValues = async () => {
        const res = await axios.get('/api/values/current');
        setValues(res.data);
    }

    const fetchIndexes = async () => {
        const res = await axios.get('/api/values/all');
        setSeenIndexes(res.data);
    }

    const renderValues = () => {
        const entries = []
        for (let key in values) {
            entries.push(<div>
                For index {key} I calculated {values[key]}
            </div>)
        }
        return entries
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/values', { index: Number(index) }).then(res => {
            setIndex('');
        })
    }
    return <>
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Enter your index:
                </label>
                <input value={index} onChange={($event) => setIndex($event.target.value)} />
                <button type="submit">submit</button>
            </form>

            <h3>Indexes i have seen:</h3>
            {
                seenIndexes?.map(({ number }) => number).join(', ')
            }
            <h3>Calculated values:</h3>
            {
                renderValues()
            }
        </div>
    </>
}