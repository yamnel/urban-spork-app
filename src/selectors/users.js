// TODO: Maybe Add logic to only show certain users?
export default (users, {text}) => {
    return users.filter((user) => {

        const nameMatch = user.firstName.toLowerCase().includes(text.toLowerCase());
        const emailMatch = user.email.toLowerCase().includes(text.toLowerCase());
        const departmentMatch = user.department.toLowerCase().includes(text.toLowerCase());
        const titleMatch = user.position.toLowerCase().includes(text.toLowerCase());

        return nameMatch || emailMatch || departmentMatch || titleMatch
    })
}
