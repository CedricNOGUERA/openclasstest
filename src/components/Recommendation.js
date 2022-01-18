function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring =  currentMonth >= 2 && currentMonth <= 5

    if(!isSpring) {
        return <div>C'est la période de Mataari nia, il faut rempoter</div>
    }
    return <div>Ce n'est pas le moment de remopter</div>
}
export default Recommendation