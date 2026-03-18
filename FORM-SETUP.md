# İletişim ve Kariyer Formları Kurulum Rehberi

## FormSubmit.co ile Form Entegrasyonu

Formlarınız **FormSubmit.co** servisi ile entegre edildi. Bu ücretsiz bir servistir ve backend kodlama gerektirmez.

## Kurulum Adımları

### 1. E-posta Adresinizi Güncelleyin

Her iki formda da (`index.html` ve `kariyer.html`) şu satırı bulun:

```html
action="https://formsubmit.co/your-email@example.com"
```

`your-email@example.com` kısmını kendi e-posta adresinizle değiştirin:

```html
action="https://formsubmit.co/info@basturkholding.com"
```

### 2. İlk Test Gönderimi

- Web sitenizi açın
- İletişim formunu doldurun ve gönderin
- FormSubmit size bir **doğrulama e-postası** gönderecek
- E-postadaki linke tıklayarak e-posta adresinizi doğrulayın

### 3. Tamamlandı!

Doğrulamadan sonra tüm form gönderileri otomatik olarak e-postanıza gelecek.

## Özellikler

✅ **Spam Koruması**: Honeypot ile bot koruması aktif
✅ **Captcha**: Devre dışı (istenirse aktif edilebilir)
✅ **Dosya Yükleme**: Kariyer formunda CV yükleme destekleniyor
✅ **Tablo Formatı**: E-postalar düzenli tablo formatında gelir
✅ **Otomatik Yanıt**: İsteğe bağlı teşekkür sayfası

## Gelişmiş Ayarlar (Opsiyonel)

### Teşekkür Sayfası Eklemek

Form action'ına şunu ekleyin:

```html
<input type="hidden" name="_next" value="https://basturkholding.com/tesekkurler.html">
```

### Captcha Aktif Etmek

```html
<input type="hidden" name="_captcha" value="true">
```

### CC (Kopya) E-posta Eklemek

```html
<input type="hidden" name="_cc" value="hr@basturkholding.com">
```

## Test Etme

1. Formu doldurun
2. Gönder butonuna tıklayın
3. FormSubmit'in varsayılan teşekkür sayfasına yönlendirileceksiniz
4. E-postanızı kontrol edin

## Sorun Giderme

**Form gönderilmiyor:**
- E-posta adresini doğru yazdığınızdan emin olun
- İlk gönderimde doğrulama e-postasını kontrol edin

**E-posta gelmiyor:**
- Spam klasörünü kontrol edin
- E-posta doğrulamasını yaptığınızdan emin olun

**Dosya yüklenmiyor:**
- Dosya boyutu 5MB'dan küçük olmalı
- Sadece PDF, DOC, DOCX formatları destekleniyor

## Alternatif Servisler

Eğer FormSubmit.co ile sorun yaşarsanız:

1. **EmailJS** - https://www.emailjs.com/
2. **Formspree** - https://formspree.io/
3. **Basin** - https://usebasin.com/

## Destek

FormSubmit.co dokümantasyonu: https://formsubmit.co/

---

**Not:** FormSubmit.co ücretsiz planda aylık 50 form gönderimi limiti vardır. Daha fazla gönderi için premium plana geçebilirsiniz.
