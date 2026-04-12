import { StructureBuilder } from 'sanity/desk'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('fabric').title('Fabrics'),
      S.documentTypeListItem('inquiry').title('Inquiries'),
      S.divider(),
      S.listItem()
        .title('Shop Settings')
        .child(
          S.document()
            .schemaType('shopSettings')
            .documentId('shopSettings')
        ),
    ])
