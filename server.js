import express from 'express';

const invoices = [{
    id: 1,
    amount: 125039,
    satus: 'paid',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        name: 'Construtec Meridian',
        email: 'john.doe@example.com'
    }
}, {
    id: 2,
    amount: 117681,
    satus: 'paid',
    issueDate: '03-09-2026',
    dueDate: '05-10-2026',
    customer: {
        name: 'Padaria Mil passos',
        email: 'passos@mil.com'
    }
}, {
    id: 3,
    amount: 674828,
    satus: 'paid',
    issueDate: '01-09-2026',
    dueDate: '21-10-2026',
    customer: {
        name: 'Oficina de Software',
        email: 'oficinea@software.com'
    }
}];

const app = express();

app.get( '/api/health', (request, response) =>{
    response.status(200).json({ sucess: {
        status: 200,
        message: 'Server is running'
    }});
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => {
    const id = Number(request.params.id);

    const invoice = invoices.find(element => element.id === id);
    if (!invoice) 
        response.status(404).json({ error: {
            status: 404,
            message: 'Invoice not found'
        }});
    
        response.status(200).json(invoice);




});


app.use((request, response) => {
    response.status(404).json({ error: {
        status: 404,
        message: 'Resource not found'
    }});
});


app.listen(3000); 