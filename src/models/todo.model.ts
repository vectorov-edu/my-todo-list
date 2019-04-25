export class TodoModel {
    constructor(    
        public id: number,
        public title: string,
        public body: string,
        public creatingDate: string,
        public lastEditingDate: string
        )
      {}
}