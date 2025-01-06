import React from 'react'
import Table from '../Table/Table'

const SizeChart = () => {
    const columns = [
        { header: 'Size', tag: 'size' },
        { header: 'Chest (in)', tag: 'chest' },
        { header: 'Waist (in)', tag: 'waist' },
        { header: 'Hip (in)', tag: 'hip' },
        { header: 'Inseam (in)', tag: 'inseam' },
        { header: 'Neck (in)', tag: 'neck' },
        { header: 'Sleeve (in)', tag: 'sleeve' },  
    ]
    const data = [
        { size: 'XS', chest: '32-34', waist: '24-26', hip: '34-36', inseam: 30, neck: 15, sleeve: 32 },
    { size: 'S', chest: '34-36', waist: '26-28', hip: '36-38', inseam: 30, neck: 15.5, sleeve: 33 },
    { size: 'M', chest: '36-38', waist: '28-30', hip: '38-40', inseam: 30, neck: 16, sleeve: 33.5 },
    { size: 'L', chest: '38-40', waist: '30-32', hip: '40-42', inseam: 30, neck: 16.5, sleeve: 34 },
    { size: 'XL', chest: '40-42', waist: '32-34', hip: '42-44', inseam: 30, neck: 17, sleeve: 34.5 },
    { size: 'XXL', chest: '42-44', waist: '34-36', hip: '44-46', inseam: 30, neck: 17.5, sleeve: 35 },
    ]
return (
    <div className="mx-10 mt-10">
       <Table columns={columns} data={data} className={'mx-10 mt-10'} ></Table>
    </div>
)
}

export default SizeChart
