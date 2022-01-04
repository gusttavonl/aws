let messages = ['any_message', 'any_message two', 'any_message three']

exports.handler = async () => {
    let messageList = messages.map((message) => message)
    return messageList;
};
