const mailer = require('nodemailer')
const auth = require('../config/auth.json');

module.exports = {
    async sendMail(req, res) {
        try {
            
            const transport = mailer.createTransport({
                host: 'smtp.mailtrap.io',
                port:  2525,
                auth: {
                    user: auth.user,
                    pass: auth.pass
                }
            })
    
    
            const message = await transport.sendMail({
                from: "'Lucas Duarte' <lucasduarte0951@gmail.com>",
                to: "test@hotmail.com",
                subject: "Este email ele é um teste",
                text: "Email de teste",
                html: " <header style='background: #037171; padding: 2rem;'><h2 style='color: #fff'>Email de teste, por favor não responder</h2></header><section style='background: #333'><p style='color: #fff'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident laudantium dignissimos non sit velit aperiam quis deserunt officiis, omnis possimus inventore nihil veritatis rerum labore error qui assumenda illo!</p></section>",
            })
    
            return res.send({message})
        } catch (error) {
            res.status(401).send(error)
        }
    }
}