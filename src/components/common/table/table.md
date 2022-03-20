### Instructions for <Table> component

    Table Comp takes 3 arguments and all of them are arrays

        * headContent takes an array of strings
            Each string renders a single th element on <thead> ( The header of the table)

            Example : ["Customer Name", "Email]

        * data takes an array of objects
            Each object contains the data that is to be renderd on the table
            For every object it renders a <tr> ( New row on the table)

            Example : [
                {
                    customerName: 'John Smith',
                    email: 'jhon@gmail.com'
                }
            ]


        * columns takes an array of objects
            Each object contains the "path" or "content"
            For every object it renders a <td> ( New cell ) on the row
            Renders the conent of the path from the given data

            Example : [
                {
                    path: "customerName"
                }
            ]

            <td>{ data[path] }</td>
