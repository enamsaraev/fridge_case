from django import forms


class AllergyProductAddForm(forms.Form):
    name = forms.CharField(required=True,
                          widget=forms.TextInput(attrs={
                            'type': 'text',
                            'class': 'list-container-allergy-form-left-side-settings__allergy-member-name',
                            'placeholder': 'Имя'})
                          )