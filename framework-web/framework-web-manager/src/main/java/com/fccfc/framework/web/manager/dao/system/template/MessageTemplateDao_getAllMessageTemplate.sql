SELECT m.MESSAGE_TEMPLATE_ID,
       m.MESSAGE_TEMPLATE_CODE,
       m.NAME,
       m.TEMPLATE,
       m.STATE,
       m.CONTACT_CHANNEL_IDS,
       m.STATE_TIME,
       m.DELAY,
       m.RESEND_TIMES,
       m.SAVE_HISTORY,
       m.SAVE_DAY,
       m.CREATE_TIME
FROM   MESSAGE_TEMPLATE m