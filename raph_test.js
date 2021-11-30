curl -v -X POST https://lrs-stg.education.gov.il/xAPI/Statements \
>   -H "Content-Type: application/json" \
>   -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHRfc3NsX2tleSJ9.ew0KICAiaXNzIjogImh0dHBzOi8vZWR1YXBpZ3dkbXouZWR1Y2F0aW9uLmdvdi5pbDo4NDQzIiwNCiAgImlhdCI6MTYzODI5NDE2NiwNCiAgImF1ZCI6IjQ5YTZhYjYwLWQ4NTgtNDE3MS1hODEyLTM4MWE1MTExOWQ3MSIsDQogICJleHAiOjE2MzgyOTc3NjYsDQogICJqdGkiOiJlNTY1NzM1Yi0zOTllLTQ5Y2MtYmY1OC01OGJiMmNkOThjZTkiLA0KICAic3ViIjoiTFJTX3lpc3VtYXRpY2EiLCAgDQogICJ0b2tlbl9kZXRhaWxzIjogew0KICAgICJzY29wZSI6ImxycyIsDQogICAgImV4cGlyZXNfaW4iOjM2MDAsDQogICAgInRva2VuX3R5cGUiOiJCZWFyZXIiIA0KICB9DQp9.gpkMpbOXpFdLIlbh65aGk2lK6KGpUlVnvT-aE8f8Dm39okXECBwSqazMTtJqIRIHPnqk6lDuwlTEJvVSNCCZidv7plkh0DhYRDde76wNwlN-5aGAI4R1iCQJyqS9O95cJBCm2qLQJy8gEj0yh2qGJOzvquDBZ_ifBydqTGPFq8vAw-ZXxygDLQVTnX0knvjtbjnSTOE0d1LeP0FZMlxAA7eyy7CN-txgrGpXQWpJrh1jbEVX_a_RwxL3kLAba4a7srbIouuV6EpjUM83l1Zru2jcRH-jvF7WFQSmguq16UT6Hu3F_SE4Q4B1idYi3WSsxZLy1xQ-VkD_vHB00Waz-g" \
>   -d '{
>     "id":"fd41c918-b88b-4b20-a0a5-a4c32391aaa0",
>     "actor":{
>         "objectType": "Agent",
>         "account": {
>             "homePage": "https://lgn.edu.gov.il/nidp",
>             "name": "1234567890"
>         }
>     },
>     "verb":{
>         "id":"https://cad.lxp.eduction.gov.il/xapi/verbs/read"
>     },
>     "object":{
>         "objectType":"Activity",
>         "id":"https://provider.example.com/course/courseid/book/bookid/page/padenum",
>         "definition":{
>             "type":"https://lxp.education.gov.il/xapi/moe/activities/page"
>         }
>     },
>     "result":{
>         "success":true,
>         "completion":true,
>         "duration":"1M5.00S"
>     },
>     "context": {
>         "contextActivities": {
>             "grouping": [
>                 {
>                     "objectType":"Activity",
>                     "id":"https://lxp.education.gov.il/xapi/moe/ecat/item/00000"
>                 }
>             ],
>             "category": [
>                 {
>                     "objectType":"Activity",
>                     "id":"https://lxp.education.gov.il/xapi/moe/curriculum/מבוא למדעים/10/מבוא למדעים/מבוא לכימיה: אנרגטיקה ודינמיקה",
>                     "definition":{
>                         "type":"https://lxp.education.gov.il/xapi/moe/activities/tag"
>                     }
>                 }               
>             ]
>         },
>         "revision": "1.0",
>         "language": "he"
>     },
>     "timestamp":"2021-03-01T12:00:00.00+02:00", 
>     "version":"1.0.3"
> }'

