type invoicestatus = 'paid' | 'pending';

interface Invoice {
    id: number;
    amount: number;
    status: invoicestatus;
    issueDate: string;
    dueDate: string;
    customer: {
        id: number;
        name: string;
        email: string;
    }
}

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

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById(id: number) {
    return invoices.find(element => element.id === id);;
} 

