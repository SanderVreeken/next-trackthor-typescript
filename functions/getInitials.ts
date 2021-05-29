// Function to retrieve the initals of the user based on their first and lastname.
const getInitials = (name: string): string => {
    const split = name.split(' ')
    return `${split[0].charAt(0)}${split[split.length - 1].charAt(0)}`
}

export default getInitials