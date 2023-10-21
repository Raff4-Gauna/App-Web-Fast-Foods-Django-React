from rest_framework.exceptions import ValidationError

def validate_opening_and_closing_time(opening_time, closing_time):
    if closing_time <= opening_time:
        raise ValidationError("La hora de cierre debe ser posterior a la hora de apertura.")

def validate_phone_number(phone_number):
    if not phone_number.isdigit() or len(phone_number) < 5:
        raise ValidationError("El número de teléfono debe contener al menos 5 dígitos y ser numérico.")

def validate_business_name(name):
    if len(name) < 5:
        raise ValidationError("El nombre del negocio debe contener al menos 5 caracteres.")

def validate_business_description(description):
    if len(description) > 500:
        raise ValidationError("La descripción del negocio no debe exceder los 500 caracteres.")
