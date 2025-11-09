export default function CurrentTime() {
    let time = new Date()
    return <div>
        This is the current time: {time.toLocaleString()}
    </div>
}