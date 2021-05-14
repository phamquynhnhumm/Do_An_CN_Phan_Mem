import DonHangItem from '../Item'

export default function UI({data}){
    const {allDonhangs}=data;
    return (
        allDonhangs.map(donHang => {
            return <DonHangItem donHang = {donHang}/>                          
        })
    
    )
}