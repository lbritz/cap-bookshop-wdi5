module.exports = {
        iEnterTitle: async () => {
                await browser.asControl({
                        selector: {
                                id: "preview::BooksDetailsTarget--fe::EditableHeaderForm::EditableHeaderTitle::Field-edit",
                                interaction: {
                                        idSuffix: "inner"
                                }
                        }
                }).enterText("test");
        },
        iSelectGenre: async () => {
                await browser.asControl({
                        selector: {
                                id: "preview::BooksDetailsTarget--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-edit-inner-vhi"
                        }
                }).press();
                await browser.asControl({
                        selector: {
                        controlType: "sap.m.Text",
                        viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                        viewId: "preview::BooksDetailsTarget",
                        bindingPath: {
                                path: "/Genres(10)",
                                propertyPath: "name"
                        },
                        searchOpenDialogs: true
                }}).press();
        },
        iSelectAuthor: async () => {
                await browser.asControl({
                        selector: {
                        id: "preview::BooksDetailsTarget--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-edit-inner-vhi"
                }}).press();
                await browser.asControl({
                        selector: {
                        controlType: "sap.fe.macros.controls.FieldWrapper",
                        viewName: "sap.fe.templates.ObjectPage.ObjectPage",
                        viewId: "preview::BooksDetailsTarget",
                        searchOpenDialogs: true,
                        ancestor: {
                                id: "preview::BooksDetailsTarget--fe::FormContainer::FieldGroup::General::FieldValueHelp::author_ID::Dialog::qualifier::::Table-innerTable-rows-row2",
                                searchOpenDialogs: true
                        }
                }}).press();
        },
        iPressCreate: async () => {
                await browser.asControl({
                        selector: {
                        id: "preview::BooksDetailsTarget--fe::FooterBar::StandardAction::Save",
                        interaction: {
                                idSuffix: "BDI-content"
                        }
                }}).press();
        },
        iSeeEditButton: async () => {
                const enabled = await browser.asControl({
                        selector: {
                        id: "preview::BooksDetailsTarget--fe::StandardAction::Edit"
                }}).getEnabled();
                expect(enabled).toBeTruthy();
        },
        iNavigateBack: async () => {
                await browser.asControl({
                        selector: {
                        id: "backBtn"
                }}).press();
        }
};